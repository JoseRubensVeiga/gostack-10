import { getRepository } from 'typeorm';
import User from '../models/User';
import { compare } from 'bcryptjs';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
}

export default class CreateSessionService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    return {
      user,
    };
  }
}