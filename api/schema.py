import graphene

class Query(graphene.ObjectType):
    hello = graphene.String()
    
    def resolve_hello(self, info):
        if info.context.user.is_anonymous:
            raise Exception('Your not logged in, but hello!')
        
        return f"Hello! {info.context.user.password}"

schema = graphene.Schema(query=Query)