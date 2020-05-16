const express = require("express");
const app = express();
const cors = require("cors");
const {pool} = require("./config");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//Add a new customer

app.post("/customers", async (req, res) => {
  try {
    const { name } = req.body;
    const { age } = req.body;
    const { gender } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { city } = req.body;
    const { state } = req.body;
    const { zipcode } = req.body;
    const newCustomer = await pool.query(
      "INSERT INTO customers (name,age,gender,email,phone,city, state,zipcode) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [name, age, gender, email, phone, city, state, zipcode]
    );

    res.json(newCustomer.rows[0]);
  } catch (e) {
    res.status(500);
		res.send({data:'Something went wrong'});

  }
});

//get all customer

app.get("/customers", async (req, res) => {
  try {
    const customerList = await pool.query("SELECT * FROM customers");
    res.status(200).json(customerList.rows);
  } catch (e) {
    console.error(e.message);
  }
});

//get search match
app.get("/customers/search/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const customer = await pool.query(
      "SELECT * FROM customers WHERE name = $1",
      [name]
    );

    res.status(200).json(customer.rows);
  } catch (e) {
    res.status(500);
		res.send({data:'Something went wrong'});
  }
});

//get a customer

app.get("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await pool.query(
      "SELECT * FROM customers WHERE name = $1",
      [id]
    );

    res.status(200).json(customer.rows);
  } catch (e) {
    res.status(500);
		res.send({data:'Something went wrong'});

  }
});

//update customer details

app.put("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { age } = req.body;
    const { gender } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { city } = req.body;
    const { state } = req.body;
    const { zipcode } = req.body;

    const customer = await pool.query(
        "UPDATE customers SET  name = $1, age = $2,gender=$3,email=$4,phone=$5,city=$6, state=$7,zipcode=$8  WHERE customer_id = $9",
        [name, age, gender, email, phone, city, state, zipcode,id]
      );

    res.status(200).json(" Successfully updated!");
  } catch (e) {
    res.status(500);
		res.send({data:'Something went wrong'});
  }
});

//delete a customer

app.delete("/customers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCustomer = await pool.query("DELETE FROM customers WHERE customer_id =$1", [id]);
        res.status(200).json("Successfully Deleted");
    }catch(e){
        res.status(500);
		    res.send({data:'Something went wrong'});
    }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
