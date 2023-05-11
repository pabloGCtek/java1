package com.softtek.presentacion;

import com.softtek.modelo.Campos;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        Campos campo = new Campos(1);

        System.out.println(campo.Muestra());
        campo.Incrementa();
        System.out.println(campo.Muestra());

    }
}