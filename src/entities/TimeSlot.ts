import {Entity,BaseEntity,Column,PrimaryColumn,PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany,CreateDateColumn  } from "typeorm"
import { Station } from './Station';

@Entity("timeslot")
export class TimeSlot extends BaseEntity {

    @PrimaryGeneratedColumn()
    timeslot_id: number;
    
    @Column()
    station_id: string

    @Column()
    start: Date;

    @Column()
    end: Date;

    @CreateDateColumn()
	created_at: Date;

    @Column({nullable: true})
	comment: string;


    @Column({nullable: true}) 
    used:boolean;

    @ManyToOne(
        () => Station, 
        (station) => station.timeslots,
        {
			onDelete: 'CASCADE',
		})
    @JoinColumn({ name: "station_id" })
    station: Station;
}