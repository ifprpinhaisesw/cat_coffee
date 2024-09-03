from sqlalchemy.exc import SQLAlchemyError, IntegrityError

from db import db
from models import StoreModel

from flask_jwt_extended import jwt_required
from flask.views import MethodView
from flask_smorest import Blueprint, abort

from schemas import StoreSchema
from db import db

blp = Blueprint("stores", __name__, description="operations on stores")

@blp.route("/store/<int:store_id>")
class Store(MethodView):
    
    @blp.response(200, StoreSchema)
    def get(self, store_id):
        store = StoreModel.query.get_or_404(store_id)
        return store
    
    def delete(self, store_id):
        store = StoreModel.query.get_or_404(store_id)
        db.session.delete(store)
        db.session.commit()
        return {"message": "Store deleted"}, 200
@jwt_required()
@blp.route("/store")
class StoreList(MethodView):
    @blp.response(200, StoreSchema(many=True))
    def get(self):
        return StoreModel.query.all()
    @blp.arguments(StoreSchema)
    @blp.response(201, StoreSchema)
    def post(cls, store_data):
        store = StoreModel(**store_data)
        try:
            db.session.add(store)
            db.session.commit()
        except IntegrityError:
            abort(
                409,
                message="A store with that name already exists.",
            )
        except SQLAlchemyError:
            abort(500, message="An error occurred creating the store.")

        return store