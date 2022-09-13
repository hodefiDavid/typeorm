import {Entity,BaseEntity,Column,PrimaryColumn,PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany  } from "typeorm"
import { Review } from './Review';
import { Reservation } from './Reservation';


@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    users_id:string

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column(
        {
           unique: true 
        }
    )
    email: string;

    @Column()
    phone: string;

    @Column({default: false})
    blocked: string;

    @OneToMany(
        () => Review, 
        (review) => review.user,
        {cascade: true}
            )
    reviews: Review[];

    // @OneToMany(
    //     () => Reservation, 
    //     (reservation) => reservation.user,
    //     {cascade: true}
    //         )
    //     reservations: Reservation[];

}

   // @Column(
    //     {
    //        type: "numeric", 
    //        //default : 
    //        name: "user balance"
    //     })
    //     balance: number;


        // @Column(
    //     {
    //     type: "simple-array", 
    //     default: []
    //         })
    //     family_members: string[];

    // @Column(
    //     {
    //     type: "json", 
    //     nullable: true 
    //         })
    //         additional_info:{
    //             age: number;
    //             hair_color: string;
    //         }

    // type review = {
    //     date:Date,
    //     rating: number,
    //     comment: string,
    //     reviewer: string,
    //     station_id: string,
    // } 
    // type reviews = review[];
    // addReviwe(review: Review){
    //     if(this.reviews == null){
    //         this.reviews = new Array<Review>();
    //     }
    //     this.reviews.push(review);
    // }