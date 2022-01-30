import { Directive, Field, ID, ObjectType } from 'type-graphql';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity,
} from 'typeorm';

@Directive(`@key(fields: "id")`)
@ObjectType()
@Entity()
export default class Alert extends BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  body: string;

  @Field()
  @Column({ type: 'timestamp' })
  setDate: Date;

  @Field()
  @CreateDateColumn()
  createdDate: Date;

  @Field()
  @UpdateDateColumn()
  updatedDate: Date;

  @Field()
  @DeleteDateColumn()
  deletedDate: Date;
}
