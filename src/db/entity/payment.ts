import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Customer } from "./customer";
import { Company } from "./company";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number;

  @ManyToOne(() => Customer, (customer) => customer.payments, {
    nullable: false,
  })
  customer: Customer;

  @ManyToOne(() => Company, { nullable: false })
  company: Company;

  @Column()
  credit_card_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
