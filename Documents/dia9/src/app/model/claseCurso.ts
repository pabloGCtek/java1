export enum niveles{
    iniciacion ="inicioacion",
    intermedio = "intermendio",
    avanzado = "avanzado"
}

export class claseCurso{
    private _id: number

    private _nombre: string

    private _duracion: number

    private _nivel: niveles

    constructor(id:number,nombre:string,dur:number,nivel:any){
        this._id=id
        this._nombre=nombre
        this._duracion=dur
        this._nivel=nivel
    }


    public get nivel(): niveles {
        return this._nivel
    }
    public set nivel(value: niveles) {
        this._nivel = value
    }

    public get duracion(): number {
        return this._duracion
    }
    public set duracion(value: number) {
        this._duracion = value
    }

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get nombre(): string {
        return this._nombre
    }
    public set nombre(value: string) {
        this._nombre = value
    }
}