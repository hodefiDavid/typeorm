import {Entity,BaseEntity,Column,PrimaryColumn,PrimaryGeneratedColumn,CreateDateColumn,
	UpdateDateColumn,OneToMany,JoinColumn,ManyToOne} from "typeorm"
    import { Reservation } from './Reservation';
    import { Station } from './Station';

@Entity("orders")
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
	order_id: string;

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

    @Column()
    station_id: string;

    @CreateDateColumn()
	user_id: string;

    @OneToMany(
        () => Reservation, 
        (reservation) => reservation.order,
        {cascade: true}
            )
        reservations: Reservation[];

    @ManyToOne(
        () => Station, 
        (station) => station.orders,
        {
            onDelete: 'CASCADE',
        })
        @JoinColumn({ name: "station_id" })
        station: Station;    

    @Column()
    paid:boolean;
}

