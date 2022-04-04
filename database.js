import pkg from 'pg';
const { Client } = pkg
const connectionString = 'postgres://csblfmme:mn4_4uQAlhdrCM8MAM-jRZUJ-cBcCLJN@raja.db.elephantsql.com/csblfmme'

const client = new Client(connectionString)

client.connect();

export default {
    client
}