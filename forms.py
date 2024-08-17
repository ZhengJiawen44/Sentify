from flask_wtf import FlaskForm
from wtforms import SearchField
from wtforms import SubmitField
from wtforms.validators import DataRequired, Length


class videoLinkForm(FlaskForm):
    link = SearchField('Youtube Link', validators = [DataRequired(),Length(min=32,max=100)])
    submit = SubmitField('Search')
    