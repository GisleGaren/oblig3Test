package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Repository
public class BilettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilett(Biletter bilett){
        String sql = "INSERT INTO Biletter (film, antall, fornavn, etternavn, telefonnr, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql,bilett.getFilm(),bilett.getAntall(),bilett.getFornavn(),bilett.getEtternavn(),bilett.getTelefonnr(),bilett.getEpost());
    }

    public List<Biletter> hentAlleBiletter(){
        String sql = "SELECT * FROM Biletter";
        List<Biletter> biletter = db.query(sql,new BeanPropertyRowMapper(Biletter.class));
       // biletter.sort((bilett1,bilett2) -> bilett1.getEtternavn().compareTo(bilett2.getEtternavn()));
        return biletter;
    }

    public void slettBiletter(){
        String sql = "DELETE FROM Biletter";
        db.update(sql);
    }
}
