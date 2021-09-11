import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class Usuarios {
  @PrimaryGeneratedColumn()
  @Column()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
