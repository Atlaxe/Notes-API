import app from './app.js';
import config from './config/config';
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
//# sourceMappingURL=server.js.map