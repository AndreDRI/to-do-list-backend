import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findPending(): Promise<Task[]> {
    return this.taskRepository.find({ where: { completed: false } });
  }

  findCompleted(): Promise<Task[]> {
    return this.taskRepository.find({ where: { completed: true } });
  }

  create(title: string): Promise<Task> {
    const newTask = this.taskRepository.create({ title });
    return this.taskRepository.save(newTask);
  }

  async update(id: number, title?: string, completed?: boolean): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;
    return this.taskRepository.save(task);
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
