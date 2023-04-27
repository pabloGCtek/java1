export class clasePedido{
    private _idPedido: number

    private _idCliente: number

    private _nombreCliente: string
   
    private _fPago: string

    private _direccion: string 
    
    constructor(id:number,idC:number,nombre:string,fPago:string,dir:string){
        this._idCliente=idC
        this._idPedido=id
        this._nombreCliente=nombre
        this._fPago=fPago
        this._direccion=dir
    }
    

    public get idPedido(): number {
        return this._idPedido
    }
    public set idPedido(value: number) {
        this._idPedido = value
    }

    public get idCliente(): number {
        return this._idCliente
    }
    public set idCliente(value: number) {
        this._idCliente = value
    }

    public get nombreCliente(): string {
        return this._nombreCliente
    }
    public set nombreCliente(value: string) {
        this._nombreCliente = value
    }

    public get fPago(): string {
        return this._fPago
    }
    public set fPago(value: string) {
        this._fPago = value
    }

    public get direccion(): string {
        return this._direccion
    }
    public set direccion(value: string) {
        this._direccion = value
    }

    toString():string{
        return ("Pedido con id: "+this._idPedido+" para el cliente: "+this.nombreCliente+" con id: "+this._idCliente+" mandado a: "+this._direccion+" pagado en: "+this._fPago)
    }
}