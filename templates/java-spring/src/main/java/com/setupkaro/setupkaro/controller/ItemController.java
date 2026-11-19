package com.setupkaro.setupkaro.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.*;

@RestController
@RequestMapping("/api/v1/items")
public class ItemController {

    private final Map<Long, Item> items = new HashMap<>();
    private long nextId = 1;

    @GetMapping
    public List<Item> getAllItems() {
        return new ArrayList<>(items.values());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItem(@PathVariable Long id) {
        return items.containsKey(id)
            ? ResponseEntity.ok(items.get(id))
            : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        item.setId(nextId++);
        items.put(item.getId(), item);
        return ResponseEntity.ok(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item item) {
        if (!items.containsKey(id)) {
            return ResponseEntity.notFound().build();
        }
        item.setId(id);
        items.put(id, item);
        return ResponseEntity.ok(item);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        if (!items.containsKey(id)) {
            return ResponseEntity.notFound().build();
        }
        items.remove(id);
        return ResponseEntity.noContent().build();
    }

    public static class Item {
        private Long id;
        private String name;
        private String description;
        private Double price;
        private Integer quantity = 1;

        // Getters and setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
        public Double getPrice() { return price; }
        public void setPrice(Double price) { this.price = price; }
        public Integer getQuantity() { return quantity; }
        public void setQuantity(Integer quantity) { this.quantity = quantity; }
    }
}