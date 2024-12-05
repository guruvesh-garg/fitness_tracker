package com.fitwithguptaji.fitness_tracker.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Body_Fat_Percentage {

    @PostMapping("/bodyfat_percent")
    public double calculateBodyFatPercentage(
            @RequestParam String gender,
            @RequestParam int neckSize,
            @RequestParam int waistSize,
            @RequestParam int hips,
            @RequestParam int height) {

        if (gender.equalsIgnoreCase("male")) {
            return 86.010 * Math.log10(waistSize - neckSize) - 70.041 * Math.log10(height) + 36.76;
        } else if (gender.equalsIgnoreCase("female")) {
            return 163.205 * Math.log10(waistSize + hips - neckSize) - 97.684 * Math.log10(height) - 78.387;
        } else {
            throw new IllegalArgumentException("Invalid gender specified. Please use 'male' or 'female'.");
        }
    }
}