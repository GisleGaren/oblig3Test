package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    BilettRepository rep;

    @PostMapping ("/add")
    public void leggTil(Biletter bilett){
        rep.lagreBilett(bilett);
    }
    @GetMapping("/return")
    public List<Biletter> returnere(){
        return rep.hentAlleBiletter();
    }
    @GetMapping("/slett")
    public void slett(){
        rep.slettBiletter();
    }
}