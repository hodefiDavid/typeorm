import {Entity,BaseEntity,Column,PrimaryColumn,PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany,CreateDateColumn  } from "typeorm"
import { User } from './User';
import { Station } from './Station';
import { Order } from './Order';

@Entity("reservation")
export class Reservation extends BaseEntity {

    @PrimaryGeneratedColumn()
    reservation_id: number;
    
    @Column()
    start: Date;

    @Column()
    end: Date;

    @CreateDateColumn()
	created_at: Date;

    @Column()
    station_id: string;

    @Column()
    users_id:string;

    @ManyToOne(
        () => Order, 
        (order) => order.reservations,
        {
			onDelete: 'CASCADE',
		})
    @JoinColumn({ name: "users_id" })
    order: Order;
}




    