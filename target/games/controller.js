"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
exports.color = ["red", "yellow", "blue", "green", "magenta"];
const defaultBoard = [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]
];
let Controller = class Controller {
    async allGames() {
        const games = await entity_1.default.find();
        return { games };
    }
    createGame(game) {
        game.board = defaultBoard;
        game.color = exports.color[Math.floor(Math.random() * exports.color.length)];
        return game.save();
    }
    async updateGameBoard(id, update) {
        const game = await entity_1.default.findOne(id);
        if (!game)
            throw new routing_controllers_1.NotFoundError('Cannot find game');
        const newBoard = [];
        const board = JSON.stringify(game.board);
        const splitedBoard = board.split("");
        const stringBoard = splitedBoard.filter(o => o !== "'" && o !== '"' && o !== "[" && o !== "]" && o !== ",");
        const index = Math.floor((Math.random() * stringBoard.length - 1) + 1);
        stringBoard.splice(index, 1, update.board);
        while (stringBoard.length)
            newBoard.push(stringBoard.splice(0, 3));
        if (update.board)
            game.board = newBoard;
        if (update.name)
            game.name = update.name;
        game.color = exports.color[Math.floor(Math.random() * exports.color.length)];
        if (update.color)
            game.color = update.color;
        if (game.color !== "red" && game.color !== "green" && game.color !== "yellow" && game.color !== "magenta" && game.color !== "blue")
            throw new routing_controllers_1.BadRequestError('Color: "red", "blue", "green", "yellow" or "magenta" only!');
        return game.save();
    }
};
__decorate([
    routing_controllers_1.Get('/games'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Controller.prototype, "allGames", null);
__decorate([
    routing_controllers_1.Post('/games'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.default]),
    __metadata("design:returntype", void 0)
], Controller.prototype, "createGame", null);
__decorate([
    routing_controllers_1.Put('/games/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], Controller.prototype, "updateGameBoard", null);
Controller = __decorate([
    routing_controllers_1.JsonController()
], Controller);
exports.default = Controller;
//# sourceMappingURL=controller.js.map