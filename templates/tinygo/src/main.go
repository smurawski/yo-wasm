package main

import (
	"fmt"
)

func main() {<% if (wagi) { %>
	fmt.Println("Content-Type: text/plain")
	fmt.Println("")<% } %>	
	fmt.Println("Hello, world!")
}
