import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User []> {
    return this.userModel.find().exec();
  }

  async getData(queryData, pageData): Promise<User[]> {
    return this.userModel
      .find(queryData)
      .skip((pageData.page - 1) * pageData.count | 0)
      .limit(pageData.count | 10)
      .exec();
  }
}
