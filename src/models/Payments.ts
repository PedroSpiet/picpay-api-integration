import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payments')
export default class Payments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  referenceId: string;

  @Column()
  value: number;

  @Column()
  expiresAt: string;
}