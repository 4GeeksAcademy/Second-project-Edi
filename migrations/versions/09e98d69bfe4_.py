"""empty message

Revision ID: 09e98d69bfe4
Revises: f450ef4d7a1b
Create Date: 2023-10-18 15:16:18.061679

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '09e98d69bfe4'
down_revision = 'f450ef4d7a1b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('item', schema=None) as batch_op:
        batch_op.add_column(sa.Column('category', sa.Enum('colchones', 'canapes', 'cabeceros', 'sofas', 'armarios', name='myenum'), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('item', schema=None) as batch_op:
        batch_op.drop_column('category')

    # ### end Alembic commands ###
