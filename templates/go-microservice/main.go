package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Item struct {
	ID          uint   `json:"id" gorm:"primaryKey"`
	Name        string `json:"name" gorm:"not null"`
	Description string `json:"description"`
	Price       float64 `json:"price" gorm:"not null"`
	Quantity    int    `json:"quantity" gorm:"default:1"`
}

func main() {
	r := gin.Default()

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})

	// Root endpoint
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": fmt.Sprintf("Welcome to %s!", os.Getenv("PROJECT_NAME")),
			"docs":    "/swagger/index.html",
		})
	})

	// CRUD routes
	api := r.Group("/api/v1")
	{
		api.GET("/items", getItems)
		api.GET("/items/:id", getItem)
		api.POST("/items", createItem)
		api.PUT("/items/:id", updateItem)
		api.DELETE("/items/:id", deleteItem)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	r.Run(":" + port)
}

func getItems(c *gin.Context) {
	// TODO: Connect to database
	c.JSON(http.StatusOK, []Item{})
}

func getItem(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"id": id, "message": "Item details"})
}

func createItem(c *gin.Context) {
	var item Item
	if err := c.ShouldBindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Item created", "item": item})
}

func updateItem(c *gin.Context) {
	id := c.Param("id")
	var item Item
	if err := c.ShouldBindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Item updated", "id": id, "item": item})
}

func deleteItem(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "Item deleted", "id": id})
}