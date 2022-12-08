/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
  ) {}
  async create(createBookingDto: CreateBookingDto) {
    const bookingDate = await this.bookingsRepository.create(createBookingDto);
    return this.bookingsRepository.save(bookingDate);
  }

  findAll() {
    return this.bookingsRepository.find();
  }

  findOne(id: number) {
    return this.bookingsRepository.findOneBy({ id });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  async remove(id: number): Promise<void> {
    await this.bookingsRepository.delete(id);
  }
}
