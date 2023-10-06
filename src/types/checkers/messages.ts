import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
    MsgCreateGame,
    MsgCreateGameResponse,
    MsgPlayMove,
    MsgPlayMoveResponse,
} from "../generated/cosmoscheckers/tx"

export const typeUrlMsgCreateGame = "/perfogic.cosmoscheckers.cosmoscheckers.MsgCreateGame"
export const typeUrlMsgCreateGameResponse = "/perfogic.cosmoscheckers.cosmoscheckers.MsgCreateGameResponse"
export const typeUrlMsgPlayMove = "/perfogic.cosmoscheckers.cosmoscheckers.MsgPlayMove"
export const typeUrlMsgPlayMoveResponse = "/perfogic.cosmoscheckers.cosmoscheckers.MsgPlayMoveResponse"

export const checkersTypes: ReadonlyArray<[string, GeneratedType]> = [
    [typeUrlMsgCreateGame, MsgCreateGame],
    [typeUrlMsgCreateGameResponse, MsgCreateGameResponse],
    [typeUrlMsgPlayMove, MsgPlayMove],
    [typeUrlMsgPlayMoveResponse, MsgPlayMoveResponse],
]

export interface MsgCreateGameEncodeObject extends EncodeObject {
    readonly typeUrl: "/perfogic.cosmoscheckers.cosmoscheckers.MsgCreateGame"
    readonly value: Partial<MsgCreateGame>
}

export function isMsgCreateGameEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateGameEncodeObject {
    return (encodeObject as MsgCreateGameEncodeObject).typeUrl === typeUrlMsgCreateGame
}

export interface MsgCreateGameResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/perfogic.cosmoscheckers.cosmoscheckers.MsgCreateGameResponse"
    readonly value: Partial<MsgCreateGameResponse>
}

export function isMsgCreateGameResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateGameResponseEncodeObject {
    return (encodeObject as MsgCreateGameResponseEncodeObject).typeUrl === typeUrlMsgCreateGameResponse
}

export interface MsgPlayMoveEncodeObject extends EncodeObject {
    readonly typeUrl: "/perfogic.cosmoscheckers.cosmoscheckers.MsgPlayMove"
    readonly value: Partial<MsgPlayMove>
}

export function isMsgPlayMoveEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgPlayMoveEncodeObject {
    return (encodeObject as MsgPlayMoveEncodeObject).typeUrl === typeUrlMsgPlayMove
}

export interface MsgPlayMoveResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/perfogic.cosmoscheckers.cosmoscheckers.MsgPlayMoveResponse"
    readonly value: Partial<MsgPlayMoveResponse>
}

export function isMsgPlayMoveResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgPlayMoveResponseEncodeObject {
    return (encodeObject as MsgPlayMoveResponseEncodeObject).typeUrl === typeUrlMsgPlayMoveResponse
}
