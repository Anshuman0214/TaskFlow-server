export interface AuthUserResponse {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AccessTokenPayload {
  userId: string;
}

export interface RefreshTokenPayload {
  userId: string;
  sessionId: string;
}       