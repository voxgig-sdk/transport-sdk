package core

type TransportError struct {
	IsTransportError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTransportError(code string, msg string, ctx *Context) *TransportError {
	return &TransportError{
		IsTransportError: true,
		Sdk:              "Transport",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TransportError) Error() string {
	return e.Msg
}
