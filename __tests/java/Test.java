/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.test;

/**
 *
 * @author maycon.mellos
 */
public class Test {

    public static void test(boolean cond) throws Exception{
        if(!cond){
            throw new Exception("Test error");
        }
    }
    //
    public static void main(String args[]) throws Exception{
        
        NoteTest.run();
        CleffTest.run();
        RendererContextTest.run();
        BarTest.run();
        BeatTest.run();
    }
}
