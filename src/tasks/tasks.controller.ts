import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(@Query('status') status?: string): Promise<Task[]> {
    if (status === 'pending') return this.tasksService.findPending();
    if (status === 'completed') return this.tasksService.findCompleted();
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body('title') title: string): Promise<Task> {
    return this.tasksService.create(title);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body('title') title?: string,
    @Body('completed') completed?: boolean,
  ): Promise<Task> {
    return this.tasksService.update(id, title, completed);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.tasksService.delete(id);
  }
}
