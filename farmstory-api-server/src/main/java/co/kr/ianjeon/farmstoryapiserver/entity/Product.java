package co.kr.ianjeon.farmstoryapiserver.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pno;
    private String productName;
    private String type;
    private int price;
    private int point;
    private int discount;
    private int delivery;
    private int stock;
    private String thumb120;
    private String thumb240;
    private String thumb750;
    private String etc;

}