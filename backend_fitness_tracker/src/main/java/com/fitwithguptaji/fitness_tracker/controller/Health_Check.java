package com.fitwithguptaji.fitness_tracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Health_Check {
    @GetMapping("/health_check")
    public String app_health_check() {
        return "APP_IS_WORKING_PROPERLY";
    }
}
