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

	// Serve static files
	r.Static("/static", "./web")

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})

	// Root endpoint - serve styled HTML
	r.GET("/", func(c *gin.Context) {
		projectName := os.Getenv("PROJECT_NAME")
		if projectName == "" {
			projectName = "{{projectName}}"
		}

		c.Header("Content-Type", "text/html")
		c.String(http.StatusOK, indexHTML(projectName))
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

func indexHTML(projectName string) string {
	return fmt.Sprintf(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>%s</title>
    <link rel="stylesheet" href="/static/style.css">
</head>
<body>
    <header>
        <div class="container">
            <a href="/" class="logo">%s</a>
            <nav>
                <a href="/swagger/index.html">API Docs</a>
                <a href="/health">Health</a>
            </nav>
        </div>
    </header>
    <main class="container">
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Welcome to %s!</h3>
            <p>Your Go microservice is ready. Built with Gin, GORM, gRPC, Wire DI, and Docker.</p>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Quick Links</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
                <a href="/swagger/index.html" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; background: var(--color-primary); color: white;">Swagger UI</a>
                <a href="/health" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1.25rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; background: var(--color-border); color: var(--color-text);">Health Check</a>
            </div>
        </div>
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem;">
            <h3>Stack</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dbeafe; color: #1e40af;">Gin</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dbeafe; color: #1e40af;">GORM</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: #dcfce7; color: #166534;">gRPC</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: var(--color-border); color: var(--color-text);">Wire DI</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: var(--color-border); color: var(--color-text);">testify</span>
                <span style="display: inline-flex; align-items: center; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background: var(--color-border); color: var(--color-text);">Docker</span>
            </div>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
            <p>API documentation available at <code>/swagger/index.html</code></p>
        </div>
    </main>
    <footer style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--color-border); text-align: center; color: var(--color-text-muted); font-size: 0.875rem;">
        <p>Bootstrapped with <a href="https://setupkaro.dev">setupkaro</a></p>
    </footer>
</body>
</html>`, projectName, projectName, projectName)
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