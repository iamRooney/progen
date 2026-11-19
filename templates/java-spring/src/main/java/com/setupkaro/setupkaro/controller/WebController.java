package com.setupkaro.setupkaro.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @Value("${spring.application.name:{{projectName}}}")
    private String projectName;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("projectName", projectName);
        return "index";
    }

    @GetMapping("/health")
    public String health() {
        return "health";
    }
}