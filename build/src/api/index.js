import 'dotenv/config';
import server from './app';
const start = async () => {
    try {
        await server.listen({ port: 3000 });
        console.log(`Server listening at http://localhost:3000`);
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map