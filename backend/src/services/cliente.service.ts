class ClienteService {
    async getAll():Promise<Cliente[]> {
        const res = await pool.query<Cliente>("SELECT *
            return res.rows
        }

        async create(dados: CriarCliente): Promise<Cliente> {
            const res = await pool.query<Cliente>(`INSERT INTO ... RETURNING*"`, [$nome, $telefone, $dt_nascimento, $email])
            return res.row[0]
        }
}
