package main

import (
	"database/sql"
	"fmt"
	_ "github.com/sijms/go-ora/v2"
)

func main() {
	dsn := "oracle://username:password@host:port/service_name"
	db, err := sql.Open("oracle", dsn)
	if err != nil {
		panic(err)
	}
	defer db.Close()
	err = db.Ping()
	if err != nil {
		panic(err)
	}
	fmt.Println("Connected to Oracle Database using go-ora!")
}
