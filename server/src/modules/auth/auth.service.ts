import { User } from "../users/user.model.js";
import { AppError } from "../../utils/AppError.js";
import { AuthUserResponse } from "./auth.types.js";
import { RegisterInput } from "./auth.validation.js";

export const registerUser = async (
  input: RegisterInput,
): Promise<AuthUserResponse> => {
  const { name, email, password } = input;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("Email is already registered", 409);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    isActive: user.isActive,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};