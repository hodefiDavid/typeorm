import {Entity,BaseEntity,Column,PrimaryColumn,PrimaryGeneratedColumn,CreateDateColumn,
	UpdateDateColumn,JoinColumn,OneToMany} from "typeorm"
    import { TimeSlot } from './TimeSlot';
    import { Reservation } from './Reservation';
    import { Order } from './Order';
    import { Review } from './Review';


@Entity("station")
export class Station extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
	station_id: string;
        
    @Column()
    owner_id:string; 

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

    @Column()
    address:string;

    @Column()
    image:string;
   
    @Column()
    plug_type:string; 

    @Column()
    Price_per_hour:number;

    @Column(
        { type: "json"})
           
            cords:{
                lat: string;
                lan: number;
            }

    @Column({nullable: true})
    review_avg:number;
    
    @Column({nullable: true})
    published: boolean;

    
    @OneToMany(
        () => TimeSlot, 
        (timeslot) => timeslot.station,
        {cascade: true}
            )
        timeslots: TimeSlot[];
    
    @OneToMany(
        () => Order, 
        (order) => order.station,
        {cascade: true}
            )
        orders: Order[];

    @OneToMany(
        () => Review, 
        (review) => review.station,
        {cascade: true}
            )
        reviews: Review[];
}
