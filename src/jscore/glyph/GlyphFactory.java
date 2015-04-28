/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.glyph;
//
import java.util.List;

/**
 *
 * @author maycon.mellos
 */
public class GlyphFactory {

    //public double scale = 1;
    public List<Glyph> glyphs;
    //
    public static Glyph createGlyph(GlyphType type, int duration) {
        Glyph g = null;
        switch (type) {
            case FLAG_UP: {
                g = new Flag(duration, 1);
                break;
            }
            case FLAG_DOWN: {
                g = new Flag(duration, -1);
                break;
            }
            case HEAD: {
                g = new Head(duration);
                break;
            }
            case REST: {
                
                break;
            }
        }
        //g.setScale(this.scale);
        return g;
    }
}