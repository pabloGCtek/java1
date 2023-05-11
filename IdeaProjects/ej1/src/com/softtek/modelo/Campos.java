package com.softtek.modelo;

public class Campos {

    public int X;
    public Campos(int x){
        this.X = x;
    }

    public void  Incrementa() {
        ++X;
    }

    public int Muestra() {
        return X;
    }
}
