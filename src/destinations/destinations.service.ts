/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { Destination } from './entities/destination.entity';

@Injectable()
export class DestinationsService {
  constructor(
    @InjectRepository(Destination)
    private destinationsRepository: Repository<Destination>,
  ) {}
  async create(createDestinationDto: CreateDestinationDto) {
    const destination = await this.destinationsRepository.create(
      createDestinationDto,
    );
    return this.destinationsRepository.save(destination);
  }

  findAll() {
    return this.destinationsRepository.find();
  }

  findOne(id: number) {
    return this.destinationsRepository.findOneBy({ id });
  }

  update(id: number, updateDestinationDto: UpdateDestinationDto) {
    return `This action updates a #${id} destination`;
  }

  async remove(id: number): Promise<void> {
    await this.destinationsRepository.delete(id);
  }
}
