/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.cleff;

import com.mzm.score.RendererContext;
import com.mzm.score.bar.note.Key;

/**
 *
 * @author maycon.mellos
 */
public interface Cleff {
    
    public int getKeyLocation(Key k);
    public void draw(RendererContext ctx);
    
}
