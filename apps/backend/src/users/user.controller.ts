import { Body, Controller, Get, Post, Query, RawBodyRequest, Req } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async get(@Query() params: any): Promise<string> {
    const response = await this.usersService.getData(params, 0);
    return JSON.stringify(response);
  }

  @Post()
  async post(@Body() body: any) {
    console.log(body);
    const {queryData, pageData} = body;
    return this.usersService.getData(queryData, pageData);
  }
}
