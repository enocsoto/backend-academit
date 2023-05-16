import { Column, Entity, Index, OneToMany, PrimaryColumn } from "typeorm";
import { Video } from "./video.entity";

@Index("username", ["username"], { unique: true })
@Index("email", ["email"], { unique: true })
@Entity("usuario", { schema: "academit-db" })

export class User {
    
    @PrimaryColumn("uuid", { primary: true, name: "id", length: 255})
    id: string;

    @Column("varchar", { name: "name", length: 50 })
    name: string;

    @Column("varchar", { name: "lastname", length: 255 })
    lastname: string;

    @Column("varchar", { name: "username", unique: true, length: 50 })
    username: string;

    @Column("varchar", { name: "password", length: 255 })
    password: string;

    @Column("varchar", { name: "email", unique: true, length: 255 })
    email: string;

    @Column("timestamp", {
        name: "createdat",
        default: () => "CURRENT_TIMESTAMP",
    })
    createdat: Date;

    @Column("timestamp", {
        name: "updatedat",
        default: () => "CURRENT_TIMESTAMP",
    })
    updatedat: Date;

    @OneToMany(() => Video, (video) => video.user)
    videos: Video[];
}



