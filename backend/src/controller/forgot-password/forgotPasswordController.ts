import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid"; 
import bcrypt from "bcrypt";
import { prisma } from "../../db/prisma"; 
import { sendResetEmail } from "../../config/email";

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Validate the input
    if (!email) {
       res.status(400).json({ error: "Email is required." });
      return;
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
       res.status(404).json({ error: "User not found." });
       return;
    }

    // Generate a password reset token
    const token = uuidv4(); 
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1); 

    // Save the token in the PasswordResetToken table
    const resetToken = await prisma.passwordResetToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt,
      },
    });

    // Send the password reset email with the token
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
   
    
    await sendResetEmail(user.email, "Password Reset");

     res.status(200).json({
      message: "Password reset link has been sent to your email.",
    });
  } catch (error) {
    console.error("Error in forgot password:", error);
    res.status(500).json({ error: "Something went wrong, please try again." });
  }
};


export const resetPassword = async (req: Request, res: Response) => {
    try {
      const { token, newPassword } = req.body;
  
      if (!token || !newPassword) {
         res.status(400).json({ error: "Token and new password are required." });
        return;
      }
  
      // Find the password reset token in the database
      const resetToken = await prisma.passwordResetToken.findUnique({
        where: { token },
        include: { user: true },
      });
  
      if (!resetToken) {
         res.status(400).json({ error: "Invalid or expired token." });
        return;
      }
  
      // Check if the token has expired
      if (resetToken.expiresAt < new Date()) {
         res.status(400).json({ error: "Token has expired." });
         return;
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Update the user's password
      await prisma.user.update({
        where: { id: resetToken.userId },
        data: { password: hashedPassword },
      });
  
      // Mark the token as used
      await prisma.passwordResetToken.update({
        where: { token },
        data: { usedAt: new Date() },
      });
  
       res.status(200).json({ message: "Password has been reset successfully." });
       return;
    } catch (error) {
      console.error("Error in reset password:", error);
      res.status(500).json({ error: "Something went wrong, please try again." });
    }
  };
 



  // export const changePassword = async (req: Request, res: Response) => {
  //   try {
  //     const { oldPassword, newPassword } = req.body;
  //     const userId = req.user.id; 
  
  //     // Validate input
  //     if (!oldPassword || !newPassword) {
  //       return res.status(400).json({ error: "Old password and new password are required." });
  //     }
  
  //     // Find the user by ID
  //     const user = await prisma.user.findUnique({
  //       where: { id: userId },
  //     });
  
  //     if (!user) {
  //       return res.status(404).json({ error: "User not found." });
  //     }
  
  //     // Compare the old password with the stored password hash
  //     const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
  
  //     if (!isOldPasswordValid) {
  //       return res.status(400).json({ error: "Old password is incorrect." });
  //     }
  
  //     // Hash the new password
  //     const hashedNewPassword = await bcrypt.hash(newPassword, 10);
  
  //     // Update the user's password
  //     await prisma.user.update({
  //       where: { id: userId },
  //       data: { password: hashedNewPassword },
  //     });
  
  //     res.status(200).json({ message: "Password has been updated successfully." });
  //   } catch (error) {
  //     console.error("Error in change password:", error);
  //     res.status(500).json({ error: "Something went wrong, please try again." });
  //   }
  // };