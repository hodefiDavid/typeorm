import {Entity,BaseEntity,Column,PrimaryColumn,PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany,CreateDateColumn  } from "typeorm"
import { User } from './User';
import { Station } from './Station';

@Entity("review")
export class Review extends BaseEntity {

    @PrimaryGeneratedColumn()
    review_id: number

    @CreateDateColumn()
	created_at: Date;

    @Column()
	rating: number;

    @Column()
	comment: string;

    @Column()
	users_id: string;

    @Column()
    station_id: string

    @ManyToOne(
        () => User, 
        (user) => user.reviews,
        {
			onDelete: 'CASCADE',
		})
    @JoinColumn({ name: "users_id" })
    user: User;


    @ManyToOne(
        () => Station, 
        (station) => station.reviews,
        {
			onDelete: 'CASCADE',
		})
    @JoinColumn({ name: "station_id" })
    station: Station;
}