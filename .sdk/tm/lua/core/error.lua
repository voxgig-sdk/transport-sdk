-- Transport SDK error

local TransportError = {}
TransportError.__index = TransportError


function TransportError.new(code, msg, ctx)
  local self = setmetatable({}, TransportError)
  self.is_sdk_error = true
  self.sdk = "Transport"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TransportError:error()
  return self.msg
end


function TransportError:__tostring()
  return self.msg
end


return TransportError
