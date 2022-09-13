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


}

   